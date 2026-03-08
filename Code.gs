function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setTitle('مجلة أسرة المحيميد')
    .setFaviconUrl('https://yourdomain.com/favicon.ico');
}
