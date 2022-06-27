import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_KEY,
  headers: {
    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYzNTg3NzIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9iNGhmMjFrbWgwMXhyY2Z4bjF6bHIvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWQ5Nzg5MGQtMjhjYy00N2U2LTk5ZmQtOTQwOTRjYzkwMGQ2IiwianRpIjoiY2w0eDU4d2k1MDU5dDAxdDg4ZWZ6MXRteCJ9.ypOQ0s1H3YPkg3vzCAwFMyT7KR77UjH3XMTwBemiDUh2ik_TceJbO1IrSB9bkD6wa_iQxVy7EZtjywSsA8SQBiT975tuZZJ7HOvg-FPOUmWSxoVzBywx85MICGZtrjbHQeTeHrtgkKDn997zCHACxZpr0qwixPD6tD6mMQtSBbnK_MoomiG13rwSgf9WlaDS2Fqokucqqs7CSGBnsVymd0JadFgHVZe9erHpKO5iBqYACicm6T2pv1X04OZ07q5R-sjFhFC8T8rf0xNna1dgAUcejbFq-ZMbKBzFgi1hsaZHzEO2xUwA2_XUNlKSuP3i3zA7aUhrxJBonMmsrS8QL5Ng3ecUESl3fRunxKOPrTFWT3bb5wJfKcsEXD9VqqbeYTa5Itme5as983387JWxKN9pQbDPKPzQUlmIZ3CbYpE7tKuiELz01VVdcO-NFN-QwYiQF3uGKJTMF76prCk7eA9fs3ZQwmghfaBEnLxTOIG087lm648QFBMPOQemuUiMqSNnCzwz3ClTCsKKLOi9WgxLcH0zcQcP3x7SHAl8_s50_0ljaSnKd2KDXXRFkHYsDPqCvUXGJ0IMoav1Ij6WuuPyUNTSMLLfRgeOlcJds0kUiCpwf6unWTZm0E-yh8cD4e31CJLw-kZoK1HmgokNya15kl84rSUgper0eT070DQ`,
  },
  cache: new InMemoryCache(),
});
