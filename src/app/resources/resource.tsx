import React from 'react';
import data from './data.json';


interface Resource {
  name: string;
  url: string;
}

interface ResourceData {
  'communities': Resource[];
  'job boards': Resource[];
  'advice': Resource[]
}

const resourceList: ResourceData = data;

const Resource = () => {
  const dataList = Object.entries(resourceList);
  return (
    <div className="lg:flex gap-8 justify-between">
      {dataList.map(([categoryName, resource]) => (
        <div className="flex flex-col gap-5 items-center" key={categoryName}>
          <h4 className="text-lg text-center font-bold capitalize dark:text-(--color-wheat)">{categoryName}</h4>
          <div className="flex flex-col gap-10">
            {resource.map((res: Resource) => (
              <div className="flex flex-col gap-5 w-xs px-6 py-5 bg-(--color-dark-violet) rounded-xl" key={res.name}>
                <h5 className="text-(--color-leafy) font-semibold text-l">{res.name}</h5>
                <button className="bg-(--color-leafy) px-2 py-2 rounded-xl font-semibold text-sm capitalize" onClick={() => window.open(res.url, '_blank')}>visit site</button>
              </div>
            ))}
          </div>
        </div>

      ))}
    </div>
  )
}

export default Resource