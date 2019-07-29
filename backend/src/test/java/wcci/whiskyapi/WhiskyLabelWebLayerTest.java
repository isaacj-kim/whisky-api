package wcci.whiskyapi;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import java.util.Collections;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;



@WebMvcTest(LabelController.class)
@RunWith(SpringRunner.class)
public class WhiskyLabelWebLayerTest {

	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	LabelRepository whiskyLabelRepo;
	
	private Label testWhiskyLabel;
	private Brand whiskyBrand;
	private ObjectMapper mapper = new ObjectMapper();
	@Before
	public void setup() {
		testWhiskyLabel = new Label("", whiskyBrand);
	}

	@Test
	public void fetchCollectionOfLabels() throws Exception {
		when(whiskyLabelRepo.findAll()).thenReturn(Collections.singletonList(testWhiskyLabel));
		mockMvc.perform(get("/api/labels")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(content().json(mapper.writeValueAsString(Collections.singletonList(testWhiskyLabel)), true));
	}

	@Test
	public void fetchSingleLabel() throws Exception {
		when(whiskyLabelRepo.findById(1L)).thenReturn(Optional.of(testWhiskyLabel));
		mockMvc.perform(get("/api/labels/1")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().contentType("application/json;charset=UTF-8"))
				.andExpect(content().json(mapper.writeValueAsString(testWhiskyLabel), true));
	}

	@Test
	public void addLabel() throws Exception {
		Label labelToAdd = new Label("", whiskyBrand);
		mockMvc.perform(post("/api/add-labels").contentType(MediaType.APPLICATION_JSON).content(toJson(labelToAdd)))
				.andExpect(status().isOk());
	}

	private String toJson(Label labelToAdd) {
		return testWhiskyLabel.getLabelName();
	}
}
	

