class Validator {
    static validateFields(key, val, exp) {
        try {
          if (key === '') {
            throw new Error('Ви не заповнили поле ключ!');
          }
          if (val === '') {
            throw new Error('Ви не заповнили поле значення!');
          }
          if (exp === '') {
            throw new Error('Ви не заповнили поле термiн!');
          }

        } catch (e) {
          alert(e.message);
          return false;
        }
    }
}