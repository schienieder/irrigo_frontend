import { Fragment, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const FarmerTopNav = () => {
	const { userProfile } = useAppSelector((state) => state.authState);
	const [showLogout, setShowLogout] = useState(false);

	const router = useRouter();
	const onLogout = () => {
		localStorage.clear();
		router.push("/");
	};

	return (
		<div className="w-full h-full shadow border-b border-gray-200 flex justify-between items-center px-10">
			{/*  */}
			<div></div>
			{/*  */}
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button className="p-3">
							<div className="flex items-center gap-x-1">
								<p className="text-sm font-noto">{userProfile.email}</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 text-[#89644e]"
								>
									<path
										fillRule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-10 mt-3 right-1 bg-white p-5 rounded-lg shadow border-b-200">
								<button
									onClick={onLogout}
									className="flex items-center gap-x-3 text-gray-400 hover:text-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6 text-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
										/>
									</svg>

									<p className="text-sm">Logout</p>
								</button>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
			{/*  */}
		</div>
	);
};

export default FarmerTopNav;
