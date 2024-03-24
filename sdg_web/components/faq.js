import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "The design looks rather bland, why not design catchy visuals and a gamified experience to maximize engagement?",
    answer: `
      Overly flashy visuals, as well as artificial reward systems, may limit the accessibility of some users, and given the intersectional scope of the platform, we firmly believe that less is more.
      We secure regular engagement by providing the users strong evidence that their time spent in the platform has a real impact.
      We want users to use the platform because they genuinely trust its effectiveness.
    `,
  },
  {
    question: "How do you avoid malicious users from polluting the data in areas of the city they do not inhabit?",
    answer: `
    Given the local nature of the issues expected to be reported, we find appropiate to restrict users to the municipality in which they live.
    By managing log-in's through Strong Authentification, users can be reliably classified`,
  },
  {
    question: "Some of the most critical stakeholders in the project, such as older people or disabled individuals, may have a harder time using a digital platform",
    answer:
      `
        We distinguish between active and passive stakeholders, only one person is needed to report an issues that bothers a whole district.
        Furthermore, community centers and other public entities could take advantage of the platform to reliably relay the concerns brought to their customer service when they fall outside of their responsability.
      `,
  },
];
