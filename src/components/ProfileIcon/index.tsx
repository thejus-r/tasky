import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { logOut } from "../../bloc/authSlice";
import { UserIcon } from "@heroicons/react/24/solid";
import { supabaseSignOut } from "../../utils/LoginUtils";

export default function ProfileIcon() {
  const { isLogged } = useAppSelector((state) => state.auth);

  if (isLogged) {
    return (
      <div className="relative">
        <MyMenu />
      </div>
    );
  }
  return null;
}

function MyMenu() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <Menu>
      <Menu.Button className="bg-stone-800 rounded-full p-2.5">
        <UserIcon className="w-8 h-8" />
      </Menu.Button>
      <Menu.Items className="absolute p-2 gap-4 rounded-lg shadow-2xl border-2 bg-stone-700 border-stone-700 z-50 w-48 flex flex-col top-14 right-0">
        <Menu.Item as={Fragment}>
          <div>
            <h6>Currently Logged in as</h6>
            <p>{user?.email}</p>
          </div>
        </Menu.Item>
        <Menu.Item as={Fragment}>
          {({ active }) => (
            <button
              onClick={() => {
                supabaseSignOut();
                dispatch(logOut());
              }}
              className={`rounded-md p-2  text-white ${
                active
                  ? "bg-red-700/80 border-2 border-red-500"
                  : "bg-red-900 border-2 border-red-700"
              }`}
            >
              LogOut
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
