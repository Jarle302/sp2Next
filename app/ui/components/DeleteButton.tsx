import deleteListing from "@/app/utils/api/deleteListing";

export default function DeleteButton({
  id,
  className,
}: {
  id: string;
  className: string;
}) {
  return (
    <button className={className} onClick={() => deleteListing(id)}>
      Delete
    </button>
  );
}
