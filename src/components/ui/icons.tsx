import type { ComponentProps } from "react";

export type IconProps = ComponentProps<"svg">;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 40"
            fill="none"
            {...props}
        >
            <path
                fill="#4f46e5"
                d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
            />
            <defs>
                <linearGradient
                    id="%%GRADIENT_ID%%"
                    x1="33.999"
                    x2="1"
                    y1="16.181"
                    y2="16.181"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="%%GRADIENT_TO%%" />
                    <stop offset="1" stopColor="%%GRADIENT_FROM%%" />
                </linearGradient>
            </defs>
        </svg>
    ),
    burger: (props: IconProps) => (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
        </svg>
    ),
    close: (props: IconProps) => (
        <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            ></path>
        </svg>
    ),
    check: (props: IconProps) => (
        <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
            ></path>
        </svg>
    ),
    nav: {
        product: {
            analytics: (props: IconProps) => (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    {...props}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    ></path>
                </svg>
            ),
            engagment: (props: IconProps) => (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    {...props}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                    ></path>
                </svg>
            ),
            security: (props: IconProps) => (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    {...props}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                    ></path>
                </svg>
            ),
            integrations: (props: IconProps) => (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    {...props}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                    ></path>
                </svg>
            ),
            automations: (props: IconProps) => (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    {...props}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    ></path>
                </svg>
            ),
            footer: {
                video: (props: IconProps) => (
                    <svg
                        className="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        {...props}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                ),
                phone: (props: IconProps) => (
                    <svg
                        className="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        {...props}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                ),
            },
        },
    },
    arrow: {
        down: (props: IconProps) => (
            <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
    },
    feature: {
        push: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        security: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        queue: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        advancedSecurity: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        api: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        database: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"></path>
                <path
                    fillRule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
    },
    social: {
        facebook: (props: IconProps) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        instagram: (props: IconProps) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        twitter: (props: IconProps) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                {...props}
            >
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
            </svg>
        ),
        github: (props: IconProps) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
        youTube: (props: IconProps) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                ></path>
            </svg>
        ),
    },
    companies: {
        transistor: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#111827"
                viewBox="0 0 158 48"
                {...props}
            >
                <path d="M55.42 18.178v-2.491h10.956v2.491H62.3v13.875h-2.834V18.178H55.42Zm18.097 4.577a7.526 7.526 0 0 0-1.33-.116c-1.82 0-2.89 1.188-2.89 3.592v5.793h-2.69v-11.47h2.631v1.622h.058c.52-.985 1.677-2 3.21-2 .433 0 .722.03 1.011.059v2.52Zm12.866 9.269h-2.602v-1.448h-.058c-.78.985-2.024 1.883-3.932 1.883-2.573 0-5.493-2.057-5.493-6.17 0-3.65 2.573-6.083 5.695-6.083 1.908 0 3.065 1.013 3.76 1.911h.057v-1.564h2.602v11.471h-.029Zm-5.898-1.94c1.763 0 3.411-1.536 3.411-3.738 0-2.317-1.503-3.852-3.382-3.852-2.37 0-3.499 1.912-3.499 3.795 0 1.911 1.1 3.795 3.47 3.795Zm9.021-9.531h2.66v1.449h.057c.896-1.304 2.226-1.825 3.498-1.825 2.371 0 4.453 1.564 4.453 5.243v6.604h-2.69v-6.46c0-1.97-.924-3.012-2.457-3.012-1.677 0-2.833 1.188-2.833 3.418v6.083h-2.689l.001-11.5Zm18.792 2.955c-.116-.84-.752-1.39-1.533-1.39-.925 0-1.445.579-1.445 1.216 0 .695.347 1.188 2.341 1.854 2.458.782 3.325 2.057 3.325 3.679 0 2.114-1.59 3.592-4.221 3.592-2.746 0-4.105-1.507-4.308-3.65h2.487c.115.956.694 1.68 1.879 1.68 1.012 0 1.59-.637 1.59-1.42 0-.868-.491-1.419-2.399-2.056-2.14-.695-3.239-1.767-3.239-3.563 0-1.883 1.475-3.273 3.903-3.273 2.458 0 3.759 1.448 4.048 3.33l-2.428.001Zm5.03-8.227h2.978v2.723h-2.978v-2.723Zm.145 5.272h2.688v11.5h-2.688v-11.5Zm10.986 2.955c-.116-.84-.752-1.39-1.533-1.39-.925 0-1.445.579-1.445 1.216 0 .695.347 1.188 2.342 1.854 2.457.782 3.324 2.057 3.324 3.679 0 2.114-1.59 3.592-4.221 3.592-2.746 0-4.105-1.507-4.307-3.65h2.486c.116.956.694 1.68 1.879 1.68 1.012 0 1.59-.637 1.59-1.42 0-.868-.491-1.419-2.399-2.056-2.14-.695-3.238-1.767-3.238-3.563 0-1.883 1.474-3.273 3.903-3.273 2.457 0 3.758 1.448 4.047 3.33l-2.428.001Zm3.845-2.955h1.445v-3.678h2.689v3.678h2.862v2.26h-2.891v5.127c0 1.564.492 1.999 1.59 1.999.463 0 .983-.087 1.388-.203v2.172c-.607.174-1.359.261-2.024.261-2.862 0-3.614-1.738-3.614-4.084v-5.272h-1.445v-2.26Zm14.311-.376c3.585 0 6.129 2.636 6.129 6.112 0 3.389-2.573 6.17-6.129 6.17-3.498 0-6.129-2.694-6.129-6.17 0-3.563 2.66-6.112 6.129-6.112Zm0 9.877c2.024 0 3.411-1.622 3.411-3.765 0-2.028-1.301-3.737-3.411-3.737-2.053 0-3.412 1.593-3.412 3.737 0 2.201 1.562 3.765 3.412 3.765Zm14.052-7.415c-1.822 0-2.891 1.188-2.891 3.592v5.793h-2.689v-11.47h2.631v1.622h.058c.52-.985 1.676-2 3.209-2 .433 0 .722.03 1.012.059v2.52a7.525 7.525 0 0 0-1.33-.116ZM20.812 37.731a1.39 1.39 0 0 1-1.388-1.39V11.37a1.389 1.389 0 0 1 2.369-.982c.26.26.406.614.406.982v24.97c0 .753-.636 1.391-1.387 1.391ZM15.03 25.247H8.38a1.39 1.39 0 0 1-1.387-1.39c0-.783.607-1.391 1.388-1.391h6.65a1.39 1.39 0 1 1 0 2.78v.001Zm18.243 0h-6.678a1.39 1.39 0 0 1-1.388-1.39c0-.783.607-1.391 1.388-1.391h6.65a1.39 1.39 0 0 1 1.387 1.39c0 .782-.607 1.391-1.359 1.391Z" />
                <path d="M20.816 44.712C9.338 44.712 0 35.356 0 23.856 0 12.356 9.338 3 20.816 3s20.816 9.356 20.816 20.856c0 11.5-9.338 20.856-20.816 20.856Zm0-38.931c-9.945 0-18.04 8.11-18.04 18.075s8.095 18.075 18.04 18.075c9.946 0 18.04-8.11 18.04-18.075S30.762 5.781 20.816 5.781Z" />
            </svg>
        ),
        reform: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 158 48"
                {...props}
            >
                <path
                    fill="#111827"
                    fillRule="evenodd"
                    d="M63.837 4h-32.11C29.117 4 27 6.107 27 8.706V38.97c0 2.6 2.116 4.706 4.727 4.706h32.11c2.611 0 4.728-2.107 4.728-4.706V8.706c0-2.6-2.117-4.706-4.728-4.706ZM36.48 17.449h3.642c2.085 0 3.392 1.19 3.392 3.086 0 1.923-1.237 3.058-3.35 3.058h-3.684v-6.144Zm0 9.354h3.434l3.74 7.238h4.753l-4.226-7.888c2.308-.913 3.642-3.128 3.642-5.674 0-3.971-2.71-6.407-7.117-6.407h-8.424v19.969h4.198v-7.238Zm23.068-1.992c-.083-2.02-1.306-3.28-3.197-3.28-1.877 0-3.197 1.3-3.336 3.28h6.533Zm-3.044 6.462c1.599 0 2.697-.567 3.128-1.578h3.767c-.612 2.879-3.253 4.678-7.006 4.678-4.67 0-7.423-2.934-7.423-7.888 0-4.968 2.808-8.04 7.367-8.04 4.518 0 7.187 2.865 7.187 7.708v1.231H53v.208c.056 2.27 1.39 3.68 3.503 3.68Zm16.19 2.767h4.045V22.098h3.17V18.93h-3.253V17.67c0-1.3.584-1.923 2.168-1.923.529 0 .946.041 1.21.069v-2.85a12.733 12.733 0 0 0-2.085-.153c-3.698 0-5.255 1.536-5.255 4.566v1.55H70.22v3.17h2.474V34.04Zm22.833-7.638c0 4.996-2.836 7.97-7.548 7.97s-7.548-2.974-7.548-7.97c0-4.94 2.877-7.957 7.548-7.957 4.67 0 7.548 3.003 7.548 7.957Zm-10.94 0c0 2.975 1.223 4.677 3.392 4.677 2.154 0 3.392-1.716 3.392-4.677 0-2.934-1.251-4.663-3.392-4.663-2.155 0-3.392 1.73-3.392 4.663Zm12.82 7.639h4.045v-8.455c0-2.145 1.516-3.446 3.726-3.446.653 0 1.598.125 1.918.25v-3.668c-.347-.125-1.029-.194-1.585-.194-1.946 0-3.53 1.163-3.934 2.685h-.25v-2.436h-3.92v15.264Zm15.163 0h-4.046V18.777h3.92v2.491h.251c.625-1.743 2.224-2.823 4.239-2.823 2.155 0 3.629 1.052 4.24 2.823h.25c.709-1.702 2.475-2.823 4.615-2.823 3.059 0 4.963 1.98 4.963 5.12v10.476h-4.045v-9.41c0-1.813-.848-2.712-2.558-2.712-1.64 0-2.697 1.162-2.697 2.781v9.34h-3.892v-9.575c0-1.62-.945-2.546-2.53-2.546s-2.71 1.231-2.71 2.933v9.189Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        tuple: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 158 48"
                {...props}
            >
                <path
                    fill="#111827"
                    fillRule="evenodd"
                    d="m45 4-18 6v19.5l6 2V37l18 6V11.5l-6 2V4ZM35 32.167 45 35.5V15.608l4-1.333v25.95L35 35.56v-3.393Z"
                    clipRule="evenodd"
                />
                <path
                    fill="#111827"
                    d="M69.9 20.45V31h4.447V20.45h3.53v-3.392H66.39v3.393h3.51Zm10.206 4.798c0 3.978 2.3 6.006 6.376 6.006 3.9 0 6.396-1.853 6.396-6.045v-8.15h-4.446v7.994c0 1.833-.39 2.73-1.95 2.73-1.58 0-1.97-.897-1.97-2.71v-8.015h-4.406v8.19Z"
                />
                <path
                    fill="#111827"
                    fillRule="evenodd"
                    d="M95.969 31V17.058h5.558c4.017 0 5.733 1.794 5.733 4.777v.078c0 2.906-1.93 4.544-5.538 4.544h-1.346V31h-4.407Zm5.323-7.507h-.916v-3.14h.936c1.15 0 1.755.43 1.755 1.502v.078c0 1.033-.605 1.56-1.775 1.56Z"
                    clipRule="evenodd"
                />
                <path
                    fill="#111827"
                    d="M109.562 31V17.058h4.427v10.53h5.07V31h-9.497Zm11.999-13.942V31h10.218v-3.393h-5.811v-2.086h4.368v-3.1h-4.368v-1.97h5.499v-3.393h-9.906Z"
                />
            </svg>
        ),
        savvycal: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 158 48"
                {...props}
            >
                <path
                    fill="#111827"
                    fillRule="evenodd"
                    d="M24.005 6.799c13.842-2.43 17.83.244 20.29 14.16 2.463 13.913-.042 17.73-14.206 20.219-14.165 2.487-17.827-.24-20.29-14.158C7.335 13.1 10.164 9.232 24.005 6.799h-.001Zm1.595 6.148c-2.65.466-4.566 1.678-5.668 3.44-.865 1.384-1.141 3.005-.891 4.318.552 2.895 2.95 4.717 7.809 5.085l.38.027.377.03.358.034c1.694.169 2.778.456 3.376.825.4.245.56.513.674 1.162.218 1.232-.745 2.348-3.28 2.793-1.677.295-3.467-.06-5.423-1.123a2.123 2.123 0 0 0-2.873.843 2.103 2.103 0 0 0 .846 2.862c2.76 1.5 5.509 2.044 8.186 1.574 4.673-.821 7.375-3.949 6.715-7.682-.628-3.544-3.136-5.126-8.671-5.528l-.365-.026c-1.782-.136-2.898-.481-3.487-.92-.291-.218-.399-.41-.463-.742-.055-.296.037-.839.325-1.3.443-.706 1.305-1.252 2.811-1.516 1.335-.235 2.625-.01 3.947.706a2.121 2.121 0 0 0 3.117-1.632 2.103 2.103 0 0 0-1.094-2.075c-2.149-1.164-4.41-1.559-6.706-1.155Z"
                    clipRule="evenodd"
                />
                <path
                    fill="#111827"
                    d="M59.792 31.34c3.154 0 5.364-1.654 5.364-4.435v-.042c0-2.463-1.63-3.588-4.807-4.351-2.897-.679-3.583-1.189-3.583-2.335v-.043c0-.975.9-1.76 2.447-1.76 1.18 0 2.295.382 3.454 1.125.215.127.43.191.687.191.686 0 1.244-.531 1.244-1.21 0-.51-.279-.871-.58-1.041-1.35-.891-2.875-1.38-4.764-1.38-2.981 0-5.127 1.762-5.127 4.31v.042c0 2.737 1.802 3.671 5 4.436 2.788.636 3.389 1.21 3.389 2.27v.043c0 1.102-1.03 1.867-2.66 1.867-1.631 0-2.961-.55-4.206-1.527-.171-.127-.407-.234-.772-.234-.686 0-1.245.53-1.245 1.21 0 .424.214.786.516.997a9.418 9.418 0 0 0 5.643 1.867Zm11.398.023c1.738 0 2.918-.722 3.69-1.635v.424c0 .574.516 1.083 1.267 1.083.708 0 1.265-.531 1.265-1.231v-5.518c0-1.465-.386-2.653-1.222-3.46-.794-.806-2.06-1.252-3.755-1.252-1.48 0-2.575.255-3.648.659a1.125 1.125 0 0 0-.708 1.018c0 .594.493 1.06 1.095 1.06a1.47 1.47 0 0 0 .406-.063c.708-.276 1.525-.445 2.511-.445 1.824 0 2.812.848 2.812 2.441v.275a9.563 9.563 0 0 0-3.049-.467c-2.766 0-4.676 1.189-4.676 3.608v.043c0 2.25 1.888 3.46 4.012 3.46Zm.73-1.867c-1.246 0-2.21-.617-2.21-1.7v-.042c0-1.168.986-1.867 2.66-1.867 1.03 0 1.91.19 2.574.445v.765c0 1.42-1.308 2.397-3.025 2.397v.002ZM84.84 31.34c.708 0 1.18-.467 1.48-1.126l3.777-8.573c.093-.192.144-.402.15-.616 0-.7-.557-1.23-1.265-1.23-.687 0-1.03.445-1.223.89l-2.961 7.47-2.919-7.426c-.214-.532-.58-.934-1.287-.934-.708 0-1.287.594-1.287 1.23 0 .233.086.446.15.637l3.777 8.552c.3.68.772 1.125 1.479 1.125h.13Zm12.214 0c.708 0 1.18-.467 1.48-1.126l3.777-8.573c.093-.192.144-.402.15-.616 0-.7-.557-1.23-1.265-1.23-.687 0-1.03.445-1.223.89l-2.962 7.47-2.918-7.426c-.215-.532-.58-.934-1.287-.934-.708 0-1.287.594-1.287 1.23 0 .233.086.446.15.637l3.775 8.552c.302.68.774 1.125 1.482 1.125h.128Zm9.553 3.247c1.825 0 2.854-.849 3.82-3.14l4.141-9.828c.043-.127.107-.402.107-.615 0-.68-.558-1.21-1.244-1.21-.666 0-1.031.446-1.245.976l-2.832 7.45-3.047-7.45c-.236-.594-.601-.975-1.266-.975-.729 0-1.287.53-1.287 1.252 0 .169.063.424.15.615l4.205 9.296-.086.233c-.429.87-.836 1.19-1.609 1.19-.365 0-.601-.065-.901-.15-.129-.042-.257-.085-.472-.085a1.046 1.046 0 0 0-.978.655 1.03 1.03 0 0 0-.073.407c0 .615.429.934.815 1.061.536.211 1.073.318 1.802.318Zm17.771-3.205c2.425 0 4.034-.765 5.451-1.994a1.25 1.25 0 0 0 .429-.934c0-.658-.579-1.21-1.245-1.21-.322 0-.601.128-.794.296-1.094.914-2.168 1.422-3.755 1.422-2.875 0-4.957-2.355-4.957-5.262v-.043c0-2.908 2.104-5.243 4.957-5.243 1.438 0 2.554.51 3.583 1.338a1.3 1.3 0 0 0 .794.254c.731 0 1.31-.551 1.31-1.273 0-.467-.237-.827-.515-1.04-1.31-.998-2.833-1.676-5.151-1.676-4.549 0-7.745 3.46-7.745 7.683v.042c0 4.265 3.261 7.64 7.638 7.64Zm11.785-.021c1.739 0 2.918-.721 3.692-1.634v.424c0 .574.514 1.083 1.264 1.083.709 0 1.267-.531 1.267-1.231v-5.518c0-1.465-.386-2.653-1.224-3.46-.793-.806-2.059-1.252-3.754-1.252-1.481 0-2.575.255-3.648.659a1.126 1.126 0 0 0-.709 1.018c0 .594.495 1.06 1.095 1.06.138-.001.275-.023.407-.063.709-.276 1.524-.445 2.511-.445 1.824 0 2.811.848 2.811 2.441v.275a9.56 9.56 0 0 0-3.047-.467c-2.767 0-4.678 1.189-4.678 3.608v.043c0 2.25 1.889 3.459 4.013 3.459Zm.729-1.868c-1.244 0-2.209-.615-2.209-1.698v-.042c0-1.168.987-1.867 2.66-1.867 1.031 0 1.91.19 2.575.445v.765c0 1.42-1.31 2.397-3.026 2.397Zm10.004 1.74c.73 0 1.309-.55 1.309-1.273V16.803c0-.7-.579-1.273-1.309-1.273-.729 0-1.288.572-1.288 1.273v13.158c0 .723.581 1.274 1.288 1.274Z"
                />
            </svg>
        ),
        statamic: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 158 48"
                {...props}
            >
                <path
                    fill="#111827"
                    fillRule="evenodd"
                    d="M35.278 33.677c0 2.443-.85 3.442-3.165 3.442H11.571c-2.316 0-3.165-1-3.165-3.442V28.92c0-2.294-1.105-3.59-2.167-4.184a.497.497 0 0 1 0-.85c1.105-.701 2.167-2.167 2.167-4.121V15.09c0-2.634.722-3.4 3.037-3.4h20.798c2.316 0 3.038.766 3.038 3.4v4.673c0 1.954 1.062 3.42 2.166 4.12.32.213.32.66 0 .85-1.062.616-2.166 1.912-2.166 4.185v4.758ZM15.82 30.555c1.678 1.465 3.484 2.209 5.97 2.209 3.908 0 6.457-1.954 6.457-5.12 0-3.352-3.036-4.207-5.505-4.902-1.693-.477-3.12-.88-3.12-1.96 0-.7.744-1.38 1.997-1.38 1.211 0 2.21.256 3.165.744.32.149.616.255.892.255.404 0 .723-.191 1-.573l.381-.574c.15-.212.213-.446.213-.7 0-.426-.213-.85-.53-1.063-1.276-.807-2.997-1.487-5.333-1.487-3.314 0-5.863 1.742-5.863 4.864 0 3.49 3.102 4.377 5.586 5.085 1.657.473 3.038.867 3.038 1.904 0 .998-.934 1.487-2.103 1.487a7.037 7.037 0 0 1-3.95-1.168c-.362-.234-.702-.383-1.063-.383-.319 0-.595.149-.85.468l-.51.658c-.19.213-.254.489-.254.744 0 .318.106.637.382.892ZM47.556 28.6c-.276 0-.51.107-.722.383l-.425.595c-.17.19-.213.424-.213.637 0 .276.106.552.34.765 1.402 1.21 2.932 1.848 5.035 1.848 3.292 0 5.46-1.657 5.46-4.313 0-2.824-2.569-3.545-4.655-4.131-1.429-.402-2.632-.74-2.632-1.646 0-.616.637-1.17 1.678-1.17a5.76 5.76 0 0 1 2.655.639l.064.024c.252.098.485.188.7.188.32 0 .596-.15.83-.49l.34-.487a1.13 1.13 0 0 0 .17-.616c0-.361-.17-.722-.447-.892-1.083-.723-2.528-1.275-4.503-1.275-2.783 0-4.95 1.487-4.95 4.12 0 2.928 2.615 3.675 4.712 4.273 1.403.4 2.574.735 2.574 1.612 0 .87-.786 1.275-1.784 1.275-1.296 0-2.38-.361-3.335-1-.276-.211-.616-.34-.892-.34Zm20.286 2.295a.89.89 0 0 0-.149-.51l-.276-.446c-.255-.446-.552-.616-.935-.616-.19 0-.403.042-.68.148-.275.107-.594.149-.955.149-1.126 0-1.615-.977-1.615-2.443V22.25h3.25c.616 0 1.126-.51 1.126-1.126v-1.02c0-.615-.51-1.125-1.126-1.125h-3.25v-2.634c0-.616-.51-1.126-1.125-1.126h-1.21c-.617 0-1.127.51-1.127 1.126v10.96c0 3.463 1.147 5.439 4.185 5.439 1.338 0 2.358-.276 3.377-.893.34-.17.51-.574.51-.956Zm6.882-6.755c-2.74 0-4.928 1.402-4.928 4.375 0 2.613 1.763 4.143 4.164 4.164 1.826 0 3.27-.701 3.993-1.72v.445c0 .616.51 1.126 1.126 1.126h.786c.616 0 1.126-.51 1.126-1.126V24.31c0-3.568-1.38-5.607-5.374-5.607-1.38 0-2.72.36-3.888.892-.36.17-.637.573-.637.956a.99.99 0 0 0 .082.355c.016.045.033.09.045.133l.17.36c.213.426.574.639 1.02.639.134 0 .281-.04.421-.078l.11-.03c.637-.211 1.296-.36 2.315-.36 1.87 0 2.507 1.062 2.507 3.038v.404c-.659-.49-1.848-.871-3.038-.871v-.001Zm.68 2.315c.977 0 1.742.212 2.358.659h.021v1.4c-.425.575-1.168 1.212-2.613 1.212-1.104 0-1.933-.573-1.933-1.593 0-1.147 1.02-1.678 2.167-1.678Zm16.91 4.44a.89.89 0 0 0-.15-.51l-.276-.446c-.255-.446-.552-.616-.935-.616-.19 0-.403.042-.68.148-.276.107-.594.149-.955.149-1.126 0-1.615-.977-1.615-2.443V22.25h3.25c.616 0 1.126-.51 1.126-1.126v-1.02c0-.615-.51-1.125-1.126-1.125h-3.25v-2.634c0-.616-.51-1.126-1.126-1.126h-1.21c-.616 0-1.126.51-1.126 1.126v10.96c0 3.463 1.147 5.439 4.184 5.439 1.34 0 2.358-.276 3.378-.893.34-.17.51-.574.51-.956Zm6.881-6.755c-2.74 0-4.928 1.402-4.928 4.375 0 2.613 1.784 4.143 4.163 4.164 1.827 0 3.272-.701 3.994-1.72v.445c0 .616.51 1.126 1.126 1.126h.786c.616 0 1.126-.51 1.126-1.126V24.31c0-3.568-1.381-5.607-5.375-5.607-1.38 0-2.719.36-3.887.892-.36.17-.637.573-.637.956a.992.992 0 0 0 .082.355c.016.045.033.09.045.133l.17.36c.213.426.574.639 1.02.639.134 0 .281-.04.42-.078l.11-.03c.638-.211 1.297-.36 2.316-.36 1.87 0 2.507 1.062 2.507 3.038v.404c-.659-.49-1.848-.871-3.038-.871v-.001Zm.68 2.315c.977 0 1.742.212 2.358.659h.021v1.4c-.425.575-1.168 1.212-2.613 1.212-1.104 0-1.933-.573-1.933-1.593 0-1.147 1.02-1.678 2.167-1.678Zm16.802-7.71c-1.657 0-3.25.658-4.206 1.72h-.063v-.383c0-.616-.51-1.126-1.126-1.126h-1.211c-.616 0-1.126.51-1.126 1.126v11.28c0 .616.51 1.126 1.126 1.126h1.211c.616 0 1.126-.51 1.126-1.126v-7.945c.616-.913 1.614-1.444 2.825-1.444 1.444 0 2.23.913 2.23 2.337v7.01c0 .615.51 1.125 1.126 1.125h1.211c.616 0 1.126-.51 1.126-1.126V24.5c0-.176-.007-.396-.012-.594-.005-.162-.01-.31-.01-.405.468-.913 1.487-1.55 2.783-1.55 1.636 0 2.316.913 2.316 2.59v6.82c0 .616.509 1.126 1.125 1.126h1.211c.616 0 1.126-.51 1.126-1.126v-7.69c0-3.717-1.848-4.928-4.312-4.928-2.082 0-3.59.892-4.546 2.167-.488-1.232-1.869-2.167-3.93-2.167Zm18.608-2.465c.977 0 1.976-.786 1.976-2.167 0-1.21-.999-1.996-1.976-1.996-1.168 0-2.166.786-2.166 1.996 0 1.38.998 2.167 2.166 2.167Zm1.657 3.824c0-.616-.51-1.126-1.126-1.126v-.022h-1.21c-.616 0-1.126.51-1.126 1.126v11.28c0 .616.51 1.126 1.126 1.126h1.21c.616 0 1.126-.51 1.126-1.126V20.104Zm10.94 1.784c.871 0 1.572.149 2.379.53.143.08.298.112.438.14l.135.03c.404 0 .786-.254 1.02-.636l.446-.786c.106-.15.128-.32.128-.49 0-.381-.192-.827-.531-.997-1.317-.723-2.634-1.02-4.44-1.02-4.121 0-6.989 3.144-6.989 7.074 0 4.248 2.953 7.073 7.414 7.073 1.678 0 3.101-.297 4.716-1.593.254-.191.403-.595.403-.956 0-.233-.064-.467-.212-.616l-.51-.637a1.198 1.198 0 0 0-.935-.446c-.233 0-.488.085-.722.234-.786.51-1.551.786-2.613.786-2.039 0-3.887-1.487-3.887-3.866 0-2.358 1.827-3.824 3.76-3.824Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    contact: {
        location: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                ></path>
            </svg>
        ),
        phone: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
            </svg>
        ),
        email: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
            </svg>
        ),
    },
};
