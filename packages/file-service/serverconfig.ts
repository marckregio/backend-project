import "dotenv/config"; //To use .env;

// export const user_service = process.env.USER_SERVICE || "http://10.169.6.215:4002";
// export const log_service = process.env.LOG_SERVICE || "http://10.169.6.215:4003";
// export const email_service = process.env.EMAIL_SERVICE || "http://10.169.6.215:4004";
// export const company_service = process.env.COMPANY_SERVICE || "http://10.169.6.215:4005"; 
// export const webrtc_service = process.env.WEBRTC_SERVICE || "http://10.169.6.215:4006"; 
// export const file_service = process.env.FILE_SERVICE || "http://localhost:4007";



export const api_service =  process.env.API_SERVICE || "http://localhost:4001"
export const user_service = process.env.USER_SERVICE || "http://localhost:4002";
export const log_service = process.env.LOG_SERVICE || "http://localhost:4003";
export const email_service = process.env.EMAIL_SERVICE || "http://localhost:4004";
export const company_service = process.env.COMPANY_SERVICE || "http://localhost:4005"; 
export const webrtc_service = process.env.WEBRTC_SERVICE || "http://localhost:4006"; 
export const file_service = process.env.FILE_SERVICE || "http://localhost:4007";
export const notification_service = process.env.FILE_SERVICE || "http://localhost:4008";
export const payment_service = process.env.PAYMENT_SERVICE || "http://localhost:4009";
export const tao_service = "http://localhost:3001";

export const user_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/user_service";
export const log_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/log_service";
export const email_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/email_service";
export const company_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/company_service";
export const webrtc_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/web_service";
export const file_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/file_service";
export const notification_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/notification_service";
export const payment_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/payment_service";
export const tao_service_db = "postgres://sa:adminadmin@dev-db.cd8plq9szppe.ap-southeast-1.rds.amazonaws.com:5432/tao_service";

export const db_ssl = true;

export const user_apikey = "user-dev-key";
export const log_apikey = "log-dev-key";
export const email_apikey = "email-dev-key";
export const company_apikey = "company-dev-key";
export const webrtc_apikey = "webrtc-dev-key";
export const file_apikey = "file-dev-key";
export const notification_apikey = "notification-dev-key";
export const payment_apikey = "payment-dev-key";

export const PEARLPAY_TOKEN = "08919f7b1e1299f74feb4309ab388d12e6e868ae";
export const PEARLPAY_URL = "https://pgi-stg-ws.pearlpay.io/api/v1/transactions/generate"
export const PEARLPAY_CODE = "PEARLPAY_TEST_BILLER"
export const PEARLPAY_URL_REFERENCENO = "https://pgi-stg-ws.pearlpay.io/api/v1/transactions"

//MailChimp
export const MAILCHIMP_API_KEY = "ZAB_bwJGlOFZtVt3iPfm-g"

//paymaya
export const PAYMAYA_SECRET_KEY = "c2stOHFCNW1jeVI5NjFjQUVMVEpXMXltSTBIaTJmeEhydUFPVjNTT0lwWjN4Nw==";
export const PAYMAYA_PUBLIC_KEY = "cGstemp4RjN6Wk1QOXZrNWVVSHplbzUyNUVmWWlvUm9kYkFGMEdVQXpUbFZ4OA==";
export const PAYMAYA_URL = "https://pg-sandbox.paymaya.com/payments/v1/";
export const PAYBYPAYMAYA_URL = "https://pg-sandbox.paymaya.com/payby/v2/paymaya/"
export const PAYBYPAYMAYA_PUBLIC_KEY = "cGstUlg0NFdac3JBQUo4WmJKamJJTWxsY2JjWE8wMmdhNmc1TEtVa0hkUEE1RDo="
export const PAYBYPAYMAYA_SECRET_KEY = "c2stNW1LRDFBWXgwTGZGZ0VDQmkyRnhHNkVkZGNNa1cxS3hCQzZaaEhLYkliRzo="
export const PAYMAYA_CHECKOUT_URL = "https://pg-sandbox.paymaya.com/checkout/v1/"
export const PAYMAYA_CHECKOUT_PUBLIC_KEY = "cGstUlNnR1dKRUdnNnJPbUZPY0NsNVh6VHN2R3Ntd1dLbGw1Wk1YQWRNbzBGQTo="
export const PAYMAYA_CHECKOUT_SECRET_KEY = "c2stNWNoak15MGhMbVJDMzMyYUlDRzZuTVA3OG0xaDFtWTVpZzgzanM5dkVLeTo="
export const PAYMAYA_CHECKOUT_PAYMENT_URL = "https://pg-sandbox.paymaya.com/payments/v1/";

export const s3_bucket = "talk-s3";
export const s3_folder = "file-service";
export const s3_region = "ap-southeast-1";
export const aws_accessKeyId = "AKIAUGTQEN2OWO3NOZNC";
export const aws_secretAccessKey = "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";
export const aws_bucket_url = "https://talk-s3.s3.ap-southeast-1.amazonaws.com/talk-s3";

export const gcm_api = "AAAAdBBo8Fo:APA91bEhuAYE7JNTe31vRKWlYFUgJpqkvGRNOtog0BqGDkAAqYjSqW6QY5mVQTvOBpRg8FQ1KBTYzoBKcEm0H6tbeFsxNWiAtqsHdQ3Ecs0bquxsDaTsPrkHI7v7kOhwv97KGJNCGZu-";
export const gmp_api = "AIzaSyA8RybJwRgEphlZVuuLex2S-ch5qRJTSuI";

//Login Secrets
export const RAW_PASSWORD = 'talkinnovations-social-media-password-1921680190';
export const GOOGLE_CLIENT_ID = '212752364910-lsfpe2qv7k3t2v1hm0o1e83cim5fpobe.apps.googleusercontent.com';
export const GOOGLE_SECRET = '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';
export const FB_APPID = '991815901513291';
export const FB_SECRET = 'aee72c7c91c29c7f43f0f3f7c87a85a4';
export const APPLE_APPID = 'com.talkinnovations.talklogin';
export const APPLE_CALLBACK = api_service;