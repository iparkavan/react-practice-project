"use client";

import { editProduct, FormState } from "@/actions/products";
import { Product } from "@/app/products/page";
import React, { useActionState } from "react";

type ProductFormProps = {
  formAction?: (formData: FormData) => void;
  state?: FormState;
  isPending?: boolean;
  product?: Product;
};

const ProductForm = ({
  formAction,
  state = { errors: {} },
  isPending,
  product,
}: ProductFormProps) => {
  const initialState: FormState = {
    errors: {},
  };

  const editProductId = product?.id && editProduct.bind(null, product.id);

  const [editState, formEditAction, isEditPending] = useActionState(
    editProductId,
    initialState
  );

  return (
    <form
      action={product ? formEditAction : formAction}
      className="flex flex-col space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="bg-blue-50 rounded-md p-2"
          defaultValue={product?.title}
        />
        {(state?.errors?.title || editState.errors.title) && (
          <p className="text-red-500">
            {product ? editState.errors.title : state.errors.title}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          className="bg-blue-50 rounded-md p-2"
          defaultValue={product?.price}
        />
        {(state?.errors?.price || editState.errors.price) && (
          <p className="text-red-500">
            {product ? editState.errors.price : state.errors.price}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className="bg-blue-50 rounded-md p-2"
          defaultValue={product?.description ?? ""}
        ></textarea>
        {(state?.errors?.description || editState.errors.description) && (
          <p className="text-red-500">
            {product ? editState.errors.description : state.errors.description}
          </p>
        )}
      </div>
      <button
        disabled={isPending || isEditPending}
        className="primary-btn"
        type="submit"
      >
        {isPending || isEditPending ? "Loading..." : "Save"}
      </button>
    </form>
  );
};

export default ProductForm;
