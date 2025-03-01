"use client";

import Pill from "@/features/multi-select-search/Pill";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface Hair {
  color: string;
  type: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

const page = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedData, setSelectedData] = useState<User[]>([]);
  const [selectedDataSet, setSelectedDataSet] = useState(new Set());

  const fetchUsers = async () => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const response = await fetch(
      `https://dummyjson.com/users/search?q=${query}`
    );
    const data = await response.json();

    // const filteredSuggestions = data?.users.filter(
    //   (user: User) => !selectedData.some((selected) => selected.id === user.id)
    // );
    // setSuggestions(filteredSuggestions);
    setSuggestions(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, [query]);

  const handleSelectedData = (user: User) => {
    setSelectedData((prevData) => [...prevData, user]);
    // setSelectedDataSet(new Set([...selectedDataSet, user.id]));
    setSelectedDataSet((prevSet) => new Set(prevSet).add(user.id));
    setQuery("");
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const handleRemovePill = (user: User) => {
    setSelectedData((prevData) =>
      prevData.filter((item) => item.id !== user.id)
    );
    setSelectedDataSet((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(user.id);
      return newSet;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Backspace" &&
      (e.target as HTMLInputElement).value === "" &&
      selectedData.length > 0
    ) {
      const lastUser = selectedData[selectedData.length - 1];
      handleRemovePill(lastUser);
      setSuggestions([]);
    }
  };

  return (
    <div>
      <p className="p-1 ">Mulit Select</p>
      <div className="bg-gray-100 px-4 py-3 rounded-lg w-[800px] flex flex-wrap items-center justify-start gap-2">
        {/* Pills */}
        {selectedData?.map((user, index) => (
          <Pill key={user.id} user={user} onClick={handleRemovePill} />
        ))}
        <div>
          <input
            type="text"
            autoFocus
            value={query}
            ref={inputRef}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Search User..."
            className="outline-none bg-transparent"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      {suggestions.length > 0 && (
        <ul className="w-[800px] bg-gray-100 p-3 overflow-y-scroll rounded-lg h-64 mt-3">
          {suggestions.map(
            (item: User, index) =>
              !selectedDataSet.has(item.id) && (
                <li
                  key={item.id}
                  className="border-b p-2 hover:bg-gray-200 rounded-lg transition-all duration-300 active:bg-gray-300"
                  onClick={() => handleSelectedData(item)}
                >
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      className="rounded-full"
                      width={30}
                      height={30}
                      src={item.image}
                      alt="user-image"
                    />
                    <span>
                      {item.firstName} {item.lastName}
                    </span>
                  </div>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default page;
