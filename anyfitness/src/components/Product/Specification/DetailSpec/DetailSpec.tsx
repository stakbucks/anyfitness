import { IProductSpecification } from '@/interface/product';

type Props = {
  spec: string | undefined;
  name: string;
};

export default function DetailSpec({ spec, name }: Props) {
  return (
    <>
      {spec && (
        <li className="flex justify-between">
          <p>{name}</p>
          <p className="w-auto xl:max-w-[230px] flex justify-end text-right ">
            {spec}
          </p>
        </li>
      )}
    </>
  );
}
