import { useRouter } from 'next/router';

// import LoginView from '@/components/auth/login-form';
// import { BackArrowRound } from '@/components/icons/back-arrow-round';
// import Loader from '@/components/ui/loaders/spinner/spinner';

interface IProps {
  children: any;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const { back } = useRouter();
  const { isAuthorized } = { isAuthorized: false };

  if (!isAuthorized) {
    return (
      <div className="relative flex min-h-screen w-full justify-center py-5 md:py-8">
        <button
          className="absolute top-5 left-5 flex h-8 w-8 items-center justify-center text-gray-200 transition-colors hover:text-gray-400 md:top-1/2 md:left-10 md:-mt-8 md:h-16 md:w-16 md:text-gray-300"
          onClick={back}
        >
          {/* <BackArrowRound /> */}
          Back
        </button>
        <div className="my-auto flex flex-col">
          Login View
          {/* <LoginView /> */}
        </div>
      </div>
    );
  }
  if (isAuthorized) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
  // return <Loader showText={false} />;
};

export default PrivateRoute;
