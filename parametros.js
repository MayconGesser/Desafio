var parametros = {
			"Ta" : function(a,b){
						if(a.titulo < b.titulo){
							return -1;
						}
						else if(a.titulo > b.titulo){
							return 1;
						}
						else{
							return 0;
						}
					},

			"Td" : function(a,b){
				if(a.titulo > b.titulo){
					return -1;
				}
				else if(a.titulo < b.titulo){
					return 1;
				}
				else{
					return 0;
				}
			},

			"Aa" : function(a,b){
						if(a.autor < b.autor){
							return -1;
						}
						else if(a.autor > b.autor){
							return 1;
						}
						else{
							return 0;
						}
					},

			"Ad" : function(a,b){
					if(a.autor > b.autor){
						return -1;
					}
					else if(a.autor < b.autor){
						return 1;
					}
					else{
						return 0;
					}
				},

			"Ea" : function(a,b){
					if(a.edicao < b.edicao){
						return -1;
					}
					else if(a.edicao > b.edicao){
						return 1;
					}
					else{
						return 0;
					}
				},

			"Ed" : function(a,b){
					if(a.edicao > b.edicao){
						return -1;
					}
					else if(a.edicao < b.edicao){
						return 1;
					}
					else{
						return 0;
					}
				}
			};			
