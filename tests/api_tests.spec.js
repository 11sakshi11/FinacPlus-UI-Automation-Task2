import { expect, test } from '@playwright/test';

test('API GET Request' , async({request}) => {
    
    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)
})