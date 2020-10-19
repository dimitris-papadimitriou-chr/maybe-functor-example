export var Some = (v) => ({  
  map: (f) => Some(f(v)),
  match: (pattern)=>pattern.some(v)
});

export  var None = () => ({ 
  map: (f) => None(),
  match: (pattern)=>pattern.none()
});
