/*
  Form: Nested Fields
  Separated Fields Props Definition
*/

const fields = [
    'meal.name',
    'meal.type',
    'foods',
    'foods[].name',
  ];
  
  const initials = {
    meal: {
      name: 'Chicken Teriyaki Bento',
      type: 'Dinner',
    },
  };
  
  const defaults = {
    meal: {
      name: 'Chicken Teriyaki Bento',
      type: 'Dinner',
    },
  };
  
  const values = {
    meal: {
      name: 'Chicken Teriyaki Bento',
      city: 'Dinner',
    },
    foods: [{
      name: 'Chicken',
    }, {
      name: 'Noodles',
    }],
  };
  
  const labels = {
    'meal': 'Meal',
    'meal.name': 'Meal name',
    'meal.type': 'Meal type',
    'foods': 'Foods',
    'foods[].name': 'Food name',
  };
  
  const placeholders = {
    'meal': 'Insert meal',
    'meal.name': 'Insert meal name',
    'meal.type': 'Insert meal Type',
    'foods': 'Insert all foods',
    'foods[].name': 'Insert food name',
  };
  
  const rules = {
    'meal.name': 'string|required|min:3',
    'meal.type': 'string|required|min:3',
    'foods[].name': 'string|required|min:3',
  };
  
  const bindings = {
    'meal.name': 'MaterialTextField',
    'meal.type': 'MaterialTextField',
    'foods[].name': 'MaterialTextField',
  };
  
  const $hooks = {
    onChange(instance) {
      console.log('-> onChange HOOK', instance.path || 'form');
    },
    onSuccess(fieldset) {
      // eslint-disable-next-line
      alert('see console');
      // eslint-disable-next-line
      console.log(`${fieldset.path} Values`, fieldset.values());
    },
    onError(fieldset) {
      // eslint-disable-next-line
      alert('see console');
      // eslint-disable-next-line
      console.log(`${fieldset.path} Errors`, fieldset.errors());
    },
    onInit(instance) {
       console.log('-> onInit HOOK', instance.path || 'form');
     },
    onAdd(instance) {
      console.log('-> onAdd HOOK', instance.path || 'form');
    },
    onDel(instance) {
      console.log('-> onDel HOOK', instance.path || 'form');
    },
  };
  
  const hooks = {
    'meal': $hooks,
    'meal.name': $hooks,
    'meal.type': $hooks,
    'foods': $hooks,
    'foods[]': $hooks,
  };
  
  export default {
    hooks,
    fields,
    values,
    initials,
    defaults,
    labels,
    placeholders,
    rules,
    //bindings,
  };