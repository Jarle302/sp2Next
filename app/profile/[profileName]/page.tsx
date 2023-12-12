"use client";
import ProfilePage from "@/app/ui/components/ProfilePage";
import fetchFunction from "@/app/utils/fetchFunction";
import { useEffect, useState } from "react";

type ParamType = { params: { profileName: string } };

export default function ProfileId({ params }: ParamType) {
  const [data, setData] = useState({
    name: "",
    email: "",
    avatar: "",
    credits: 0,
    wins: [""],
    listings: [
      {
        id: "",
        title: "",
        description: "",
        media: [""],
        tags: [""],
        created: "",
        updated: "",
        endsAt: "",
      },
    ],
    _count: {
      listings: 0,
    },
  });

  useEffect(() => {
    (async () => {
      const data = await fetchFunction(
        `https://api.noroff.dev/api/v1/auction/profiles/${params.profileName}?_listings=true`,
        "GET"
      );
      console.log(data);
      setData(data);
    })();
  }, []);
  return <ProfilePage {...data} setState={setData} />;
}
