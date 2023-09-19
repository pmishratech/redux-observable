// test.js
import { Selector } from 'testcafe';

fixture`Component Tests`
  .page`http://localhost:3000`; // Update the URL if needed

test('Check if "Fetch Data" button works', async (t) => {
  const fetchDataButton = Selector('button');

  await t.click(fetchDataButton);

  // Add assertions here to validate the results or behavior
});
