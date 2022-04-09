import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class=" footer-1 bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 sm:py-12">
        <div class="container mt-20 mx-auto px-4">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-between">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-2xl font-bold mb-6">Merk</h5>
              <ul class="list-none footer-links text-gray-300">
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent">
                  Copyright © 2021
                  </a>
                </li>
              </ul>
              <ul class="list-none footer-links text-gray-300">
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent">
                    Design By Merk Labs
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 class="text-lg font-semibold mb-6">SERVICES</h5>
              <ul class="list-none footer-links text-gray-300">
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  Web Development
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                    App Development
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  UI Design
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  Consultation
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-lg font-semibold mb-6">COMPANY</h5>
              <ul class="list-none footer-links text-gray-300">
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  About
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  Contact
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                    Send Quote
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent">
                  Privacy Policy
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent">
                  Term of Service
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-lg font-semibold mb-6">RESOURCES</h5>
              <ul class="list-none footer-links text-gray-300">
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                    Support
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  Documentation
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="border-b border-solid border-transparent ">
                  License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
