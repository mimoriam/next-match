import { getAuthUserId } from "@/app/actions/authActions";
import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/memberActions";
import { CardBody, CardHeader } from "@nextui-org/card";
import MemberPhotoUpload from "@/app/members/edit/photos/MemberPhotoUpload";
import { Divider } from "@nextui-org/divider";
import MemberPhotos from "@/components/photo/MemberPhotos";

export default async function PhotosPage() {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="text-2xl font-semibold text-secondary">
          Edit Profile
        </div>

        <MemberPhotoUpload />
      </CardHeader>

      <Divider />

      <CardBody>
        {/*<MemberPhotos*/}
        {/*  photos={photos}*/}
        {/*  editing={true}*/}
        {/*  mainImageUrl={member?.image}*/}
        {/*/>*/}
      </CardBody>
    </>
  );
}
