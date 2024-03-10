import config from "../../config";

export type RequestPaymentSessionParams = {
  amount: number,
  currency: string,
  country: string
}

export async function requestPaymentSession(params: RequestPaymentSessionParams) {
  const url = `${config.serverSideBaseUrl.live}/request-payment-session`;
  const paymentSession = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  })
    .then((res) => res.json()
    .then(data =>  data)
  );

  return paymentSession;
};

export async function requestPaymentComponent(params: RequestPaymentSessionParams) {
  const url = `${config.serverSideBaseUrl.local}/request-payment-session`;
  const paymentSession = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  })
    .then((res) => res.json()
    .then(data =>  data)
  );

  return paymentSession;
};