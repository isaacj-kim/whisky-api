package wcci.whiskyapi;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class WhiskyType {

	
	
	@Id
	@GeneratedValue
	private Long id;
	
	@OneToMany(mappedBy = "whiskyType")
	private Collection<WhiskyBrand> whiskyBrands;
	
	private String name;
	
	
	
	@SuppressWarnings("unused")
	private WhiskyType() {
		
	}
	public WhiskyType(String name) {
		this.name = name;
		this.whiskyBrands = new ArrayList<>();
	}
	
	public Long getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	public void addBrand(WhiskyBrand whiskyBrandName) {
		
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WhiskyType other = (WhiskyType) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}