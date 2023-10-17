import DownloadIcon from '@/UI/Icons/DownloadIcon';
import { IDoc } from '@/interface/doc';

type Props = {
  doc: IDoc;
};

export default function Doc({ doc }: Props) {
  const { url, title } = doc;
  return (
    <div className="xl:px-[16px] xl:py-[32px] px-[12px] py-[20px] w-full flex items-center justify-between xl:text-KOR-lg-B5 border-b border-solid border-theme-G2">
      <p className="xl:text-KOR-lg-B5 text-KOR-sm-C5 xl:max-w-full max-w-[350px] truncate">
        {title}
      </p>
      <a
        href={doc.url}
        target="_blank"
        className="flex gap-[4px] items-center xl:text-KOR-lg-C2 text-KOR-sm-C3"
      >
        <span>다운로드</span>
        <DownloadIcon />
      </a>
    </div>
  );
}
