import Checkicon from "@/components/icons/Checkicon";
import Collapsible from "@/components/layouts/Colapsible";
import ProductDelivery from "@/components/layouts/product-single/ProductDelivery";
import ProductImgSlider from "@/components/layouts/product-single/ProductImgSlider";
import ProductItem from "@/components/layouts/product-single/ProductItem";
import ProductItemTitle from "@/components/layouts/product-single/ProductItemTitle";
import ProductNav from "@/components/layouts/product-single/ProductNav";
import ProductPayment from "@/components/layouts/product-single/ProductPayment";
import ProductRaiting from "@/components/layouts/product-single/ProductRaiting";
import ProductTestimonials from "@/components/layouts/product-single/ProductTestimonials";
import Wrapper from "@/components/layouts/Wrapper";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { TestimonialProvider } from "@/context/TestimonialContext";
import { cn } from "@/lib/utils";
import { getProductById } from "@/utils/api";

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;

  const product = await getProductById(id);

  console.log(product?.attributes);

  if (!product) {
    return (
      <main>
        <Wrapper>
          <h1 className="text-2xl font-bold">Товар не знайдено</h1>
        </Wrapper>
      </main>
    );
  }

  return (
    <main className="space-y-1">
      <Wrapper className="sticky top-0 z-20 px-0 md:px-4">
        <ProductNav className="border" />
      </Wrapper>
      <Wrapper className="px-0 md:grid md:grid-cols-2 md:gap-1 md:px-4">
        <div>
          <div className="bg-background top-[60px] border px-6 pt-6 pb-8 md:sticky xl:px-9 xl:pb-12">
            <ProductImgSlider
              images={product.pictures}
              productTitle="product"
            />
          </div>
        </div>
        <div className="mb-1 space-y-1">
          <ProductItem>
            <h1
              id="about"
              className="scroll-mt-20 text-xl font-semibold sm:text-2xl md:scroll-mt-24 md:text-3xl lg:text-4xl xl:text-[40px]"
            >
              {product.title}
            </h1>
            <div className="flex items-center justify-between gap-2 md:gap-6">
              <div className="flex items-center gap-3">
                <ProductRaiting size="sm" raiting={4} />
                <a
                  href="#reviews"
                  className="text-blue-main hover:text-blue-dark text-sm underline decoration-dotted underline-offset-4 transition-colors duration-500 hover:decoration-solid md:text-base"
                >
                  3 відгуки
                </a>
              </div>
              <div className="text-sm md:text-base">
                <span className="text-muted-foreground">Код: </span>
                <span>{product.barcode}</span>
              </div>
            </div>
          </ProductItem>
          <ProductItem>
            <div className="absolute right-4 flex items-center gap-2 lg:static">
              <Checkicon className="w-4" />
              <span className="text-accent-custom text-sm font-medium md:text-base">
                {product.quantity > 0 ? "В наявності" : "Немає в наявності"}
              </span>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex-1">
                {product.isDiscounted ? (
                  <div className="space-y-1">
                    <div>
                      <span className="text-muted-foreground text-sm line-through md:text-base">
                        {product.oldPrice}грн
                      </span>
                      <span className="bg-destructive ml-2 inline-block rounded-md px-[10px] py-1 text-[10px] font-bold text-white md:text-xs">
                        -{product.discountPercentage}%
                      </span>
                    </div>
                    <div className="text-destructive font-bold">
                      <span className="text-3xl md:text-4xl">
                        {product.price || 0}
                      </span>
                      <span className="ml-2 text-lg md:text-2xl">грн</span>
                    </div>
                  </div>
                ) : (
                  <div className="font-bold">
                    <span className="text-3xl md:text-4xl">
                      {product.price || 0}
                    </span>
                    <span className="ml-2 text-lg md:text-2xl">грн</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col items-center justify-end gap-3 xl:flex-row">
                <Button
                  className="cursor-pointer transition-all duration-500 max-[1280px]:w-full"
                  size="lg"
                >
                  Замовити
                </Button>
                <Button
                  className="cursor-pointer transition-all duration-500 max-[1280px]:w-full"
                  size="lg"
                  variant="outline"
                >
                  Купити в 1 клік
                </Button>
              </div>
            </div>
          </ProductItem>
          <ProductItem>
            <ProductItemTitle
              id="characteristics"
              className="scroll-mt-20 md:scroll-mt-24"
              title="Характеристики"
            />
            <Collapsible initialHeight={250}>
              <Table>
                <TableCaption>Список характеристик</TableCaption>
                <TableBody>
                  {product.attributes &&
                    Object.entries(product.attributes).map(
                      ([name, value], i) => (
                        <TableRow
                          key={i}
                          className={`${i % 2 !== 0 ? "bg-backgroud" : "bg-muted"} border-b-0 max-[480px]:flex max-[480px]:flex-col`}
                        >
                          <TableCell
                            className={cn(
                              "text-primary px-4 py-3 text-sm max-[480px]:pb-1 md:text-base",
                              { "text-muted-foreground": i % 2 === 0 },
                            )}
                          >
                            {name}
                          </TableCell>
                          <TableCell
                            className={cn(
                              "text-primary px-4 py-3 text-sm max-[480px]:pt-0 md:text-base",
                              { "text-muted-foreground": i % 2 === 0 },
                            )}
                          >
                            {value}
                          </TableCell>
                        </TableRow>
                      ),
                    )}
                </TableBody>
              </Table>
            </Collapsible>
          </ProductItem>
          <ProductItem>
            <ProductItemTitle
              className="scroll-mt-20 md:scroll-mt-24"
              title="Опис"
              id="description"
            />
            <Collapsible>{product.description}</Collapsible>
          </ProductItem>
          <ProductItem>
            <ProductItemTitle
              id="delivery"
              className="scroll-mt-20 md:scroll-mt-24"
              title="Доставка"
            />
            <ProductDelivery />
          </ProductItem>
          <ProductItem>
            <ProductItemTitle
              id="payment"
              className="scroll-mt-20 md:scroll-mt-24"
              title="Оплата"
            />
            <ProductPayment />
          </ProductItem>
          <ProductItem>
            <ProductItemTitle title="Гарантія" />
            <p className="text-sm md:text-base">
              Ви можете повернути або обміняти товар протягом 14 днів
            </p>
          </ProductItem>
          <ProductItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi
            veniam, officia sit minima dolore tempora debitis eaque fugiat harum
            excepturi culpa fuga sed molestiae voluptates, ipsa in, quisquam
            magnam?
          </ProductItem>
        </div>

        <ProductItem className="col-span-2 mb-10 md:mb-20">
          <TestimonialProvider>
            <ProductTestimonials />
          </TestimonialProvider>
        </ProductItem>
      </Wrapper>
    </main>
  );
};

export default ProductPage;
