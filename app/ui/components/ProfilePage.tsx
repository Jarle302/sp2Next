"use client";

import ProfileInfo from "./ProfileInfo";
import ProfileListings from "./ProfileListings";
import { UserAccount } from "@/app/ui/components/ContextContainer";
import { useContext } from "react";
import AvatarChanger from "@/app/ui/components/AvatarChanger";
import UseAssertUser from "@/app/utils/customHooks/useAssertUser";
import { state } from "@/app/utils/types";

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
    <div className="mt-[126px] lg:mt-[0px] lg:flex lg:h-[100vh] lg:p-[40px] lg:justify-evenly">
      <section>
        <div className="relative flex flex-col text-center h-[33vh] lg:h-[100%] lg:justify-start justify-between">
          <div>
            <h1 className="font-bold text-gray-600 text-4xl lg:text-6xl">
              {name}
            </h1>
            <h2 className="font-regular">{email}</h2>
          </div>
          <div className="lg:rounded-lg lg:bg-gray-600 lg:p-[30px] lg:h-[100%] lg:flex lg:flex-col lg:items-center lg:justify-around">
            <img
              className="lg:w-[280px] lg:h-[280px]  w-[180px] h-[180px] rounded-full absolute z-10 lg:transform-none lg:static top-[100%] left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              src={
                isCurrentUser
                  ? userAccount.avatar
                  : avatar
                  ? avatar
                  : placeholder
              }
              alt="profile picture"
            />
            <div className="lg:gap-[30px] flex lg:flex-col justify-between lg:w-[100%] lg:px-3">
              <ProfileInfo
                className="lg:text-4xl lg:justify-between flex-col text-xl lg:flex-row lg:text-orange-100"
                category="Credits"
                value={credits}
              />
              <ProfileInfo
                className="lg:justify-between mt-4 text-4xl lg:mt-0 flex  gap-4 transform translate-y-[167px] lg:transform-none text-orange-100"
                category="Wins"
                value={wins?.length}
              />
              <ProfileInfo
                className="lg:text-4xl lg:justify-between flex-col text-xl lg:flex-row lg:text-orange-100"
                category="Auctions"
                value={_count?.listings}
              />
            </div>
            {isCurrentUser && (
              <>
                <AvatarChanger
                  buttonClasses={
                    "lg-rounded-none mt-[20px] py-[20px] px-[30px] rounded-2xl absolute bg-red-200 lg:static lg:transform-none text-gray-600 top-[450px] transform -translate-x-[83px]"
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
