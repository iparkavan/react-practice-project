"use server";

import { addProduct, deleteProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (
  prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  }

  if (!price.trim()) {
    errors.price = "Price is required";
  }

  if (!description.trim()) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  addProduct(title, +price, description);
  redirect("/products");
};

export const editProduct = async (
  id: number,
  prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  }

  if (!price.trim()) {
    errors.price = "Price is required";
  }

  if (!description.trim()) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  updateProduct(id, title, +price, description);
  redirect("/products");
};

// Delete Product
export const removeProduct = async (id: number) => {
  deleteProduct(id);
  revalidatePath("/products");
};
