package wcci.whiskyapi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;



//Maybe change it to blends
@Entity
public class Label {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	@JsonIgnore
	private Brand brand;
	
	private String labelName;
	
	
	@SuppressWarnings("unused")
	private Label() {
		
	}

	public Label(String labelName, Brand brand) {
	this.labelName = labelName;
	this.brand = brand;
	}
	
	public Long getId() {
		return id;
	}

	public String getLabelName() {
		return labelName;
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
		Label other = (Label) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}


