import ErrorRepository from '../app';

test('Decoding the error', () => {
  const expected = 'Switching Protocols — сервер выполняет требование клиента и переключает протоколы в соответствии с указанием, данным в поле заголовка Upgrade. Сервер отправляет заголовок ответа Upgrade, указывая протокол, на который он переключился';

  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(101)).toEqual(expected);
});

test('Decoding the error (error not found)', () => {
  const expected = 'Unknown error';

  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(105)).toEqual(expected);
});