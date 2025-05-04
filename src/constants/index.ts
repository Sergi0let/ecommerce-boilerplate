// ==================== FIELDS =============
interface IFieldConfig {
  label: string;
  type: string;
  placeholder?: string;
}

export type IField = Record<string, IFieldConfig>;

export const FIELDS: IField = {
  name: { label: "Ім'я", type: "text", placeholder: "Ваше ім'я" },
  phone: { label: "Телефон", type: "tel", placeholder: "Телефон" },
  email: { label: "Email", type: "email", placeholder: "Ваша пошта" },
  raiting: { label: "Рейтинг", type: "select" },
  comment: {
    label: "Коментар",
    type: "textarea",
    placeholder: "Додаткові коментарі",
  },
};
// ==================== END FIELDS =============
