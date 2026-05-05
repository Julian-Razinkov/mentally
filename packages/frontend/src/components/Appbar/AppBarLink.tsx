interface AppBarLinkProps {
  title: string;
  icon?: React.ReactNode;
}

export const AppBarLink = ({ title, icon }: AppBarLinkProps) => {
  return (
    <>
      <div className="text-amber-50 text-xl items-center hover:bg-green-600 px-4 py-2 rounded-3xl cursor-pointer space-x-2.5 flex">
        {icon}
        <span>{title}</span>
      </div>
    </>
  );
};
