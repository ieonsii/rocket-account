import useOverview from './useOverview';

const Overview = () => {
  const { account } = useOverview();

  return (
    <>
      <div> {account.firstName}</div>
      <div> {account.lastName}</div>
      <div> {account.email}</div>
      <div> {account.phone}</div>
      <div> {account.dob}</div>
      <div> {account.bio}</div>
    </>
  );
};

export default Overview;
