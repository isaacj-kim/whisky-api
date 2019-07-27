package wcci.whiskyapi;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class WhiskyBrand {


	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	@JsonIgnore
	private WhiskyType whiskyType;
	
	
	
	@OneToMany(mappedBy = "whiskyBrand")
	private Collection<WhiskyLabel> whiskyLabels;
	
	
	private String brandName;

	
	@SuppressWarnings("unused")
	private WhiskyBrand() {
		
	}

	public WhiskyBrand(String brandName, WhiskyType whiskyType) {
		this.brandName = brandName;
		this.whiskyType = whiskyType;
		this.whiskyLabels = new ArrayList<>();
	}
	
	public String getBrandName() {
		return brandName;
	}
	public Long getId() {
		return id;
	}
	public WhiskyType getWhiskyType() {
		return whiskyType;
	}
	public void addWhiskyType(WhiskyType whiskyType) {
		this.whiskyType = whiskyType;
	}
	
	public void addLabel(WhiskyLabel whiskyLabel) {
		this.whiskyLabels.add(whiskyLabel);
			
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
		WhiskyBrand other = (WhiskyBrand) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}