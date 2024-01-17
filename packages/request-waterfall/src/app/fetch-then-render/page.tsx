import FetchThenRender from '@/components/FetchThenRender';
import { getTimeNow } from '@/utils/helper';

export default function Page() {
  return (
    <div>
      <p>mounted at: {getTimeNow()}</p>
      <FetchThenRender />
    </div>
  );
}
