import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="vertical-center flex items-center justify-center">
      <Spinner label="Loading..." color="secondary" labelColor="secondary" />
    </div>
  );
}
