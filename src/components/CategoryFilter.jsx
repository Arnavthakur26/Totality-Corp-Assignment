"use client";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductContext";
import { Button, Checkbox } from "@nextui-org/react";

const filters = {
  id: "category",
  name: "Category",
  options: [
    { value: "new-arrivals", label: "New Arrivals", checked: false },
    { value: "sale", label: "Sale", checked: false },
    { value: "travel", label: "Travel", checked: true },
    { value: "organization", label: "Organization", checked: false },
    { value: "accessories", label: "Accessories", checked: false },
  ],
};
function CategoryFilter() {
  return (
    <div>
      <div className="border-t border-gray-200 px-4 py-6">
        <>
          <h3 className="-mx-2 -my-3 flow-root">
            <Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{filters.name}</span>
            </Button>
          </h3>
          <div className="pt-6">
            <div className="space-y-6">
              {filters.options.map((option, optionIdx) => (
                <div key={option.value} className="flex ">
                  <Checkbox
                    id={`filter-mobile-${filters.id}-${optionIdx}`}
                    name={`${filters.id}[]`}
                    defaultValue={option.value}
                    type="checkbox"
                    defaultChecked={option.checked}
                  />
                  <label
                    htmlFor={`filter-mobile-${filters.id}-${optionIdx}`}
                    className="ml-1 min-w-0  text-gray-500"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default CategoryFilter;
