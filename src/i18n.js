import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      addIngredients: 'Add ingredients',
      constructor: 'Constructor',
      login: 'Login',
      logout: 'Logout',
      orders: 'Orders',
      currentPrice: 'Current price',
      salad: 'Salad',
      bacon: 'Bacon',
      cheese: 'Cheese',
      meat: 'Meat',
      noAuthMainButton: 'Login to purchase',
      authMainButton: 'Purchase',
      less: 'Less',
      more: 'More',
      loading: 'Loading',
      ingredients: 'Ingredients',
      orderSummary: {
        title: 'Your order is',
        subtitle: 'A digital burger made from',
        price: 'The final price',
        close: 'Close',
        next: 'Resume',
      },
      checkoutSummary: {
        title: "I hope it's delisios",
        close: 'Close',
        next: 'Resume',
      },
      contactDataForm: {
        title: 'Enter your details',
        name: 'Name',
        street: 'Street',
        index: 'Index',
        coutnry: 'Coutnry',
        email: 'Email',
        order: 'Order',
      },
    },
  },
  ru: {
    translation: {
      addIngredients: 'Добавьте ингредиенты',
      constructor: 'Конструктор',
      login: 'Войти',
      logout: 'Выйти',
      orders: 'Заказы',
      currentPrice: 'Текущая цена',
      salad: 'Салат',
      bacon: 'Бекон',
      cheese: 'Сыр',
      meat: 'Мясо',
      noAuthMainButton: 'Войти для заказа',
      authMainButton: 'Заказать',
      less: 'Больше',
      more: 'Меньше',
      loading: 'Загрузка',
      ingredients: 'Ингридиенты',
      orderSummary: {
        title: 'Ваш заказ',
        subtitle: 'Цифровой бургер из',
        price: 'Конечная цена',
        close: 'Закрыть',
        next: 'Продолжить',
      },
      checkoutSummary: {
        title: 'Я надеюсь, что это вкусно',
        close: 'Закрыть',
        next: 'Продолжить',
      },
      contactDataForm: {
        title: 'Введите Ваши данные',
        name: 'Имя',
        street: 'Улица',
        index: 'Индекс',
        coutnry: 'Страна',
        email: 'Почта',
        order: 'Заказать',
      },
    },
  },
};

let lng = 'en';

try {
  lng = localStorage.getItem('lan');
} catch {
  throw new Error('Error during loading language');
}

i18n.use(initReactI18next).init({
  resources,
  lng,
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;