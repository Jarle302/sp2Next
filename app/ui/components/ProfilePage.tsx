"use client";

import ProfileInfo from "./ProfileInfo";
import ProfileListings from "./ProfileListings";
import { UserAccount } from "@/app/ui/components/ContextContainer";
import { useContext } from "react";
import AvatarChanger from "@/app/ui/components/AvatarChanger";
import UseAssertUser from "@/app/utils/customHooks/useAssertUser";
import { state } from "@/app/utils/types/types";

type ProfilePageProps = state & {
  setState: React.Dispatch<React.SetStateAction<state>>;
};

const ProfilePage = ({
  name,
  email,
  avatar,
  credits,
  wins,
  listings,
  _count,
  setState,
}: ProfilePageProps) => {
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const isCurrentUser = UseAssertUser();

  const placeholder =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  return (
    <div className="mt-[126px] sm:mt-[0px] sm:flex sm:h-[100vh] sm:p-[40px] sm:justify-evenly">
      <section>
        <div className="relative flex flex-col text-center h-[33vh] sm:h-[100%] sm:justify-start justify-between">
          <div>
            <h1 className="font-bold text-gray-600 text-4xl sm:text-6xl">
              {name}
            </h1>
            <h2 className="font-regular">{email}</h2>
          </div>
          <div className="sm:rounded-sm sm:bg-gray-600 sm:p-[30px] sm:h-[100%] sm:flex sm:flex-col sm:items-center sm:justify-around">
            <img
              className="sm:w-[280px] sm:h-[280px]  w-[180px] h-[180px] rounded-full absolute z-10 sm:transform-none sm:static top-[100%] left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              src={
                isCurrentUser
                  ? userAccount.avatar
                  : avatar
                  ? avatar
                  : placeholder
              }
              alt="profile picture"
            />
            <div className="sm:gap-[30px] flex sm:flex-col justify-between sm:w-[100%] sm:px-3">
              <ProfileInfo
                className="sm:text-4xl sm:justify-between flex-col text-xl sm:flex-row sm:text-orange-100"
                category="Credits"
                value={credits}
              />
              <ProfileInfo
                className="sm:justify-between mt-4 text-4xl sm:mt-0 flex  gap-4 transform translate-y-[167px] sm:transform-none text-orange-100"
                category="Wins"
                value={wins?.length}
              />
              <ProfileInfo
                className="sm:text-4xl sm:justify-between flex-col text-xl sm:flex-row sm:text-orange-100"
                category="Auctions"
                value={_count?.listings}
              />
            </div>
            {isCurrentUser && (
              <>
                <AvatarChanger
                  buttonClasses={
                    "sm-rounded-none mt-[20px] py-[20px] px-[30px] rounded-2xl absolute bg-red-200 sm:static sm:transform-none text-gray-600 top-[450px] transform -translate-x-[83px]"
                  }
                />
              </>
            )}
          </div>
        </div>
      </section>

      <ProfileListings
        listings={listings}
        isCurrentUser={isCurrentUser}
        setState={setState}
      />
    </div>
  );
};

export default ProfilePage;
