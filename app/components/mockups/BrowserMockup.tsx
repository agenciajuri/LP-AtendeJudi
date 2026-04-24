import { DeviceMockup } from "./DeviceMockup";

type Props = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  browserUrl?: string;
};

export function BrowserMockup(props: Props) {
  return <DeviceMockup variant="browser" {...props} />;
}

