import { Store } from '@/components/store';
import { Store as StoreUnmodified } from '@/components/store_unmodified';

export default function Home() {
    // The edited version of the v0 generated UI.
    return <Store />;

    // uncomment the line blow to see the unedited (besides some error fixing) version of the UI.
    // return <StoreUnmodified />;
}
