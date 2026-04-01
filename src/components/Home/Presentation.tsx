import { cn } from "@/utils/cn";
import ImageRespSrc from "@/components/common/ImageRespSrc";

export default function Presentation({
  data,
}: {
  data: any;
}) {
  const cns = {
    content: cn(
      "w-full flex flex-col lg:grid lg:grid-cols-2 gap-[5rem] relative"
    ),
    image: cn(
      "w-full h-[500px] sm:h-[400px] lg:h-[800px] object-cover shadow-2xl/60"
    ),
    description: {
      container: cn("flex justify-center items-center"),
      inner: cn(
        "flex flex-col items-center lg:items-start w-full sm:w-[60%] lg:w-full gap-[2rem] lg:gap-[3rem]"
      ),
      title: cn(
        "text-2-bold text-center w-[80%] sm:w-full lg:text-left"
      ),
      description: cn(
        "text-4-regular text-center lg:text-left"
      ),
    },
  };
  return (
    <div className="px-container relative flex flex-col gap-[5rem] bg-neutral-100 z-10">
      <Patterns />
      {/* Content  */}
      <div className={cns.content}>
        <ImageRespSrc
          className={cn(cns.image, "-mt-[5rem]")}
          srcArray={[
            data[0].bg_images.mobile,
            data[0].bg_images.tablet,
            data[0].bg_images.desktop,
          ]}
          useCDN={true}
        />
        <div
          className={cn(
            cns.description.container,
            "lg:ps-[6rem]"
          )}
        >
          <div className={cns.description.inner}>
            {/* Divider  */}
            <img
              className="w-[100px]"
              src="/images/patterns/pattern-divide.svg"
              alt="Enjoyable place icon"
            />
            <h2 className={cns.description.title}>
              {data[0].title}
            </h2>
            <p className={cns.description.description}>
              {data[0].description}
            </p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          cns.content,
          "flex-col-reverse mb-[5rem] lg:mb-0"
        )}
      >
        <div
          className={cn(
            cns.description.container,
            "lg:pe-[6rem]"
          )}
        >
          <div className={cns.description.inner}>
            {/* Divider  */}
            <img
              className="w-[100px]"
              src="/images/patterns/pattern-divide.svg"
              alt="Enjoyable place icon"
            />
            <h2 className={cns.description.title}>
              {data[1].title}
            </h2>
            <p className={cns.description.description}>
              {data[1].description}
            </p>
          </div>
        </div>

        <ImageRespSrc
          className={cn(cns.image, "lg:-mb-[5rem]")}
          srcArray={[
            data[1].bg_images.mobile,
            data[1].bg_images.tablet,
            data[1].bg_images.desktop,
          ]}
          useCDN={true}
        />
      </div>
    </div>
  );
}

function Patterns() {
  return (
    <>
      {/* Patterns  */}
      <img
        className="hidden sm:block absolute top-[20%] left-0 w-[65%] object-cover"
        src="/images/patterns/pattern-curve-top-right.svg"
      />

      <img
        className="hidden sm:block absolute bottom-[30%] lg:bottom-[25%] right-[5%] w-[20%] lg:w-[10%] object-cover z-10"
        src="/images/patterns/pattern-lines.svg"
      />

      <img
        className="hidden sm:block absolute bottom-0 right-0 w-[65%] object-cover"
        src="/images/patterns/pattern-curve-top-left.svg"
      />
    </>
  );
}
