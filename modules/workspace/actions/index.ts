"use server";

import db from "@/lib/db";
import { currentUser } from "@/modules/authentication/actions";
import { MEMBER_ROLE } from "@prisma/client";

export async function initializeWorkspace() {
  const user = await currentUser();
  if (!user) {
    return {
      success: false,
      error: "User not found",
    };
  }

  try {
    const workspace = await db.workspace.upsert({
      where: {
        name_ownerId: {
          ownerId: user.id,
          name: "Personal Workspace",
        },
      },
      update: {},
      create: {
        name: "Personal Workspace",
        description: "This is your personal workspace",
        ownerId: user.id,
        members: {
          create: {
            userId: user.id,
            role: MEMBER_ROLE.ADMIN,
          },
        },
      },
      include: {
        members: true,
      },
    });
    return {
      success: true,
      workspace,
    };
  } catch (error) {
    console.error("Error creating workspace:", error);
    return {
      success: false,
      error: "Error creating workspace",
    };
  }
}

export async function getWorkspaces() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  const workspaces = await db.workspace.findMany({
    where: {
      OR: [{ ownerId: user.id }, { members: { some: { userId: user.id } } }],
    },
    orderBy: { createdAt: "asc" },
  });
  return workspaces;
}

export async function createWorkspace(name: string) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const workspaces = await db.workspace.create({
    data: {
      name,
      ownerId: user.id,
      members: {
        create: {
          userId: user.id,
          role: MEMBER_ROLE.ADMIN,
        },
      },
    },
  });
  return workspaces;
}

export async function getWorkspaceById(id: string) {
  const workspace = await db.workspace.findUnique({
    where: {
      id,
    },
    include: {
      members: true,
    },
  });
  return workspace;
}
