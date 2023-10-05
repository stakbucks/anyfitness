type Props = {
  spec: string[] | undefined;
  name: string;
};

export default function DetailListedSpec({ spec, name }: Props) {
  return (
    <>
      {spec && (
        <div>
          <h3 className="text-theme-B xl:text-KOR-lg-H1 text-KOR-sm-H3">
            {name}
          </h3>

          <div className="w-full h-[2px] bg-theme-G2 my-[20px]" />

          <ul className="flex flex-col gap-[8px]">
            {spec.map((v) => (
              <li className="text-theme-G6 xl:text-KOR-lg-H5 text-KOR-sm-C2">
                · {v.replaceAll('-', '')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
