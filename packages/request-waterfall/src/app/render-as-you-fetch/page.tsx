import RenderAsYouFetch from '@/components/RenderAsYouFetch';
import { getTimeNow } from '@/utils/helper';

export default function Page() {
  return (
    <div>
      <p>mounted at: {getTimeNow()}</p>
      <RenderAsYouFetch />
    </div>
  );
}
