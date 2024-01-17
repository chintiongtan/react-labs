import FetchOnRender from '@/components/FetchOnRender';
import { getTimeNow } from '@/utils/helper';

export default function Page() {
  return (
    <div>
      <p>mounted at: {getTimeNow()}</p>
      <FetchOnRender />
    </div>
  );
}
