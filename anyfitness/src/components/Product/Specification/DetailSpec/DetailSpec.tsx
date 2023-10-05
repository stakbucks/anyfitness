import { IProductSpecification } from '@/interface/product';

type Props = {
  spec: string | string[] | undefined;
  name: string;
};

export default function DetailSpec({ spec, name }: Props) {
  const specArr = Array.isArray(spec) && spec;
  return (
    <>
      {spec && (
        <li className="flex justify-between">
          <p>{name}</p>
          <div className="w-auto max-w-[280px] flex flex-col items-end text-right ">
            {specArr
              ? specArr.map((spec) => (
                  <p className="flex flex-col ">
                    {spec.split('-').map((line) => (
                      <span>{line}</span>
                    ))}
                  </p>
                ))
              : spec}
          </div>
        </li>
      )}
    </>
  );
}
