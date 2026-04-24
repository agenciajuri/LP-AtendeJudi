import { DeviceMockup } from "./DeviceMockup";

type Props = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function PhoneMockup(props: Props) {
  return <DeviceMockup variant="phone" {...props} />;
}

