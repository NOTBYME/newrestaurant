import { ItemSize } from './../../entities/item-size.entity';
import { clean } from './clean.utils';
import { StringUtils } from './string.utils';

export class ItemFilterUtils {
    static filterResponseData(item: any, lang: string): any {
        const nameField = `name_${lang}`;
        const descriptionField = `description_${lang}`;
        const ingredientsField = `ingredients_${lang}`;
        const regionalField = `regional_${lang}`;
        const unitField = `unit_${lang}`;

        console.log(123)

        const {
            name_vi,
            name_en,
            description_vi,
            description_en,
            ingredients_vi,
            ingredients_en,
            unit_en,
            unit_vi,
            regional_en,
            regional_vi,
            images,
            ...restItem
        } = item;

        var min = Infinity;
        var max = -1;

        if (item.itemSizes) {
            item.itemSizes.forEach((itemSize: any) => {
                min = min > itemSize.price ? itemSize.price : min;
                max = max < itemSize.price ? itemSize.price : max;
            });
        }

        return clean<any>({
            name: item[nameField],
            images: StringUtils.toArray(item.images),
            description: item[descriptionField],
            ingredients: StringUtils.toArray(item[ingredientsField]),
            unit: item[unitField],
            regional: item[regionalField],
            ammount_of_money: `${StringUtils.toMoneyString(min)} - ${StringUtils.toMoneyString(max)}`,
            minPrice: item.itemSizes ? StringUtils.toMoneyString(min) : null,
            maxPrice: item.itemSizes ? StringUtils.toMoneyString(max) : null,
            ...restItem,
            category: item.category
                ? {
                      id: item.category.id,
                      name: item.category[nameField],
                      isFood: item.category.isFood,
                  }
                : null,
            itemSizes: item.itemSizes
                ? item.itemSizes.map(itemSize => ({
                      id: itemSize.id,
                      size: itemSize[`size_${lang}`],
                      price: StringUtils.toMoneyString(itemSize.price),
                      itemId: itemSize.itemId,
                  }))
                : null,
        });
    }
}
