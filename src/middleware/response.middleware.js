const ResponseMiddleware = (data, req, res) => {
  if (data.error) {
    res.status(500).json(data);
  } else {
    res.status(200).json(data);
  }
};

export default ResponseMiddleware;
