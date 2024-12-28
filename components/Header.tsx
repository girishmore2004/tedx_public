"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";

import logoBlack from "../public/assets/logo_black.jpg";
import logoWhite from "../public/assets/logo.jpg";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Speakers", href: "/#speakers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  return (
    <Popover className="relative w-full bg-black">
      <div className="px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <span className="sr-only">TEDxVNIT</span>
            <Image
              height={300}
              width={300}
              priority
              src={logoBlack}
              alt="TEDxVNIT"
            />
          </div>
          <div className="-my-2 mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="w-full hidden space-x-10 md:flex md:justify-end"
          >
            {navigation.map((item, idx) => (
              <a
                key={idx}
                className="text-base font-medium text-[#7D7D7D] hover:text-gray-300 focus:text-white"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    height={150}
                    width={150}
                    priority
                    src={logoWhite}
                    alt="TEDxVNIT"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">
                      Close menu
                    </span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navigation.map((item, idx) => (
                    <a
                      key={idx}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
