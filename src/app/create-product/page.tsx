"use client";

import { createProduct, FormState } from "@/actions/products";
import ProductForm from "@/features/products/forms/product-form";
import React, { useActionState } from "react";

const AddProduct = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <ProductForm state={state} formAction={formAction} isPending={isPending} />
  );
};

export default AddProduct;
